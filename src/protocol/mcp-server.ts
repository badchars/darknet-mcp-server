import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { allTools } from "./tools.js";
import type { ToolContext } from "../types/index.js";

function createMcpServer(ctx: ToolContext): McpServer {
  const server = new McpServer({
    name: "darknet-mcp",
    version: "0.1.0",
  });

  for (const tool of allTools) {
    server.tool(
      tool.name,
      tool.description,
      tool.schema,
      async (args: Record<string, unknown>) => {
        try {
          const result = await tool.execute(args, ctx);
          return result as any;
        } catch (err) {
          return {
            content: [{ type: "text" as const, text: `Error: ${(err as Error).message}` }],
            isError: true,
          } as any;
        }
      },
    );
  }

  return server;
}

export async function startMcpStdio(ctx: ToolContext): Promise<McpServer> {
  const server = createMcpServer(ctx);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[darknet-mcp] MCP server started on stdio");
  return server;
}
