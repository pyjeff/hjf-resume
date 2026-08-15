Write-Host "=== Environment Test ===" -ForegroundColor Green
Write-Host "Current Directory: $(Get-Location)"
Write-Host "Node Version: $(node --version)"
Write-Host "npm Version: $(npm --version)"
Write-Host ""

Write-Host "=== Installing Dependencies ===" -ForegroundColor Green
npm install --no-package-lock --loglevel=info
$exitCode = $LASTEXITCODE

Write-Host ""
Write-Host "=== Installation Result ===" -ForegroundColor Green
if ($exitCode -eq 0) {
    Write-Host "Installation completed successfully!" -ForegroundColor Green
    if (Test-Path "node_modules") {
        Write-Host "node_modules directory created!" -ForegroundColor Green
        Write-Host "Next.js version: $(node node_modules/next/package.json 2>$null | Select-String version)" -ForegroundColor Green
    } else {
        Write-Host "Warning: node_modules not found" -ForegroundColor Yellow
    }
} else {
    Write-Host "Installation failed with exit code: $exitCode" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== Files in Directory ===" -ForegroundColor Green
Get-ChildItem | Select-Object Name, Length
