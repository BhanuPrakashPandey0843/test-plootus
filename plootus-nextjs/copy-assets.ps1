# Asset Migration Script — Run once from PowerShell
# Right-click PowerShell → Run normally in the project root

$src = "C:\Users\user\Desktop\Plootus-Next\plootus\packages\web\public"
$dst = "C:\Users\user\Desktop\Plootus-Next\new\plootus-nextjs\public"

Write-Host "Copying assets from monorepo to Next.js public folder..." -ForegroundColor Cyan

# Root-level assets
$rootFiles = @("favicon.ico","favicon.png","logo.png","logo.svg","robots.txt","philosophy.svg","security.svg","placeholder.png")
foreach ($f in $rootFiles) {
    if (Test-Path "$src\$f") {
        Copy-Item "$src\$f" "$dst\$f" -Force
        Write-Host "  Copied root: $f" -ForegroundColor Green
    }
}

# About press logos
New-Item -ItemType Directory -Path "$dst\images\About" -Force | Out-Null
$aboutFiles = @("plandviser.jpeg","plansponsor.jpeg","ebri.jpeg","college_investor.jpeg","ebn.jpeg")
foreach ($f in $aboutFiles) {
    $p = "$src\images\About\$f"
    if (Test-Path $p) {
        Copy-Item $p "$dst\images\About\$f" -Force
        Write-Host "  Copied About: $f" -ForegroundColor Green
    }
}

# Security images
New-Item -ItemType Directory -Path "$dst\images\security" -Force | Out-Null
Copy-Item "$src\images\security\*" "$dst\images\security\" -Recurse -Force
Write-Host "  Copied security images" -ForegroundColor Green

# Home feature graphs
New-Item -ItemType Directory -Path "$dst\images\home-features" -Force | Out-Null
$graphFiles = @("graph1.png","graph2.png","graph3.png")
foreach ($f in $graphFiles) {
    $p = "$src\images\home-features\$f"
    if (Test-Path $p) {
        Copy-Item $p "$dst\images\home-features\$f" -Force
        Write-Host "  Copied home-feature: $f" -ForegroundColor Green
    }
}

# Partners logos
New-Item -ItemType Directory -Path "$dst\images\partners" -Force | Out-Null
if (Test-Path "$src\images\partners") {
    Copy-Item "$src\images\partners\*" "$dst\images\partners\" -Recurse -Force
    Write-Host "  Copied all partner logos" -ForegroundColor Green
}

# Core images used across pages
$coreImages = @(
    "track-accounts.png","track-accounts2.png",
    "app-store.png","app-store-badge.png","google-play.png","google-play-png-logo-3802.png",
    "ios-black.png","playstore-black.png","Plootus-Hero.png","Plootus.png",
    "retirement-hero.jpg","calculator-screen.png","account-integration.png",
    "advisor-illustration.png","plant-growth.png","technology.png","users.png",
    "vision-illustration.png","investment-advice.png","401k-planning.png",
    "retirement-projections.png","app-preview.png","girl-image.png",
    "logo2.png","grid-pattern.png","advisor-dashboard-iphone.png",
    "calculator-section.png","expense-breakdown.png","app-store-badge.png",
    "Iphone 14 - 1.png","Iphone 14 - 2.png"
)
foreach ($img in $coreImages) {
    $srcPath = "$src\images\$img"
    if (Test-Path $srcPath) {
        Copy-Item $srcPath "$dst\images\$img" -Force
        Write-Host "  Copied image: $img" -ForegroundColor Green
    }
}

# Subdirectory images (hero, icon, plan-icon, social-icon, companies, blog)
$subDirs = @("hero","icon","plan-icon","social-icon","companies")
foreach ($dir in $subDirs) {
    $srcDir = "$src\images\$dir"
    if (Test-Path $srcDir) {
        New-Item -ItemType Directory -Path "$dst\images\$dir" -Force | Out-Null
        Copy-Item "$srcDir\*" "$dst\images\$dir\" -Recurse -Force
        Write-Host "  Copied subdir: $dir" -ForegroundColor Green
    }
}

# Delete the stale invalid public file (leftover from before migration)
$staleFile = "C:\Users\user\Desktop\Plootus-Next\new\plootus-nextjs\public_OLD_FILE_DELETE_ME"
if (Test-Path $staleFile) {
    Remove-Item $staleFile -Force
    Write-Host "  Deleted stale file: public_OLD_FILE_DELETE_ME" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "All assets copied successfully!" -ForegroundColor Green
Write-Host "Run: cd 'C:\Users\user\Desktop\Plootus-Next\new\plootus-nextjs' && npm run dev" -ForegroundColor Cyan
