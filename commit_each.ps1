# commit_each.ps1

# Get all uncommitted files
$files = git status --porcelain | ForEach-Object { $_.Substring(3) }

if ($files.Count -eq 0) {
    Write-Host "No uncommitted changes found."
    exit
}

foreach ($file in $files) {
    Write-Host "Adding file: $file"
    git add $file

    # Prompt for commit message
    $message = Read-Host "Enter commit message for $file"
    git commit -m $message
}

Write-Host "All files committed individually!"
