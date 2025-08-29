@echo off
echo Building portfolio for production...
call npm run build

echo.
echo Build completed successfully!
echo.
echo To deploy to Vercel:
echo 1. Install Vercel CLI: npm install -g vercel
echo 2. Run: vercel
echo 3. Follow the prompts
echo.
echo Or push to GitHub and deploy via Vercel dashboard.
pause
