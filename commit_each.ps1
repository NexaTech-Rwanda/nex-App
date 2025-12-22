# Get all uncommitted files
$files = git status --porcelain | ForEach-Object { $_.Substring(3) }

if ($files.Count -eq 0) {
    Write-Host "No uncommitted changes found."
} else {
    foreach ($file in $files) {
        Write-Host "Adding and committing file: $file"
        git add "$file"
        git commit -m "Update $file"
        git push
    }
    Write-Host "All files committed and pushed individually!"
}
