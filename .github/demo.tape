# VHS Demo — darknet-mcp-server
Output .github/demo.gif

Set Shell "bash"
Set FontSize 14
Set Width 1000
Set Height 600
Set Theme "Catppuccin Mocha"
Set Padding 20
Set TypingSpeed 30ms

# Show help
Type `npx -y darknet-mcp-server --help`
Sleep 300ms
Enter
Sleep 6s

# Search for a breach
Type `npx -y darknet-mcp-server --tool breach_search '{"query":"linkedin.com"}'`
Sleep 300ms
Enter
Sleep 6s

# Check ThreatFox for recent IOCs
Type `npx -y darknet-mcp-server --tool threatfox_recent '{"limit":5}'`
Sleep 300ms
Enter
Sleep 6s

# List ransomware groups
Type `npx -y darknet-mcp-server --tool ransomware_groups '{}'`
Sleep 300ms
Enter
Sleep 6s

Sleep 2s
