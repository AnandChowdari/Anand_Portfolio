$ErrorActionPreference = "Stop"
$verticalDir = "public\videos"
$horizontalDir = "public\videos\horizontal"
$tempDir = "public\videos\temp_compressed"

if (-not (Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir | Out-Null
}

function Compress-Video {
    param (
        [string]$inputFile,
        [string]$outputFile,
        [string]$resolutionFilter
    )
    Write-Host "Compressing $($inputFile)..."
    # Compress with libx264, CRF 28, 24fps, fast preset, and scale
    ffmpeg -y -v warning -i "$inputFile" -vf "scale=$resolutionFilter" -c:v libx264 -preset fast -crf 28 -r 24 -c:a aac -b:a 128k "$outputFile"
}

# Process Vertical Videos (Height 480)
Get-ChildItem -Path $verticalDir -Filter *.mp4 | Where-Object { $_.DirectoryName -eq (Get-Item $verticalDir).FullName } | ForEach-Object {
    $outFile = Join-Path $tempDir $_.Name
    Compress-Video -inputFile $_.FullName -outputFile $outFile -resolutionFilter "w=-2:h=480"
    Move-Item -Path $outFile -Destination $_.FullName -Force
}

# Process Horizontal Videos (Height 360, since they are horizontal)
Get-ChildItem -Path $horizontalDir -Filter *.mp4 | Where-Object { $_.DirectoryName -eq (Get-Item $horizontalDir).FullName } | ForEach-Object {
    $outFile = Join-Path $tempDir $_.Name
    Compress-Video -inputFile $_.FullName -outputFile $outFile -resolutionFilter "w=-2:h=360"
    Move-Item -Path $outFile -Destination $_.FullName -Force
}

Remove-Item -Path $tempDir -Recurse -Force
Write-Host "Compression complete."
