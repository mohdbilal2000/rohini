# Deploying to Vercel

This Next.js project is ready to be deployed on Vercel. Follow these steps:

## Prerequisites

1. Make sure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Have a Vercel account (sign up at https://vercel.com if needed)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign in to Vercel**
   - Go to https://vercel.com
   - Sign in with your GitHub/GitLab/Bitbucket account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Select your Git repository
   - If this is your first time, authorize Vercel to access your repositories

3. **Configure Project**
   - Vercel will automatically detect Next.js
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
   - Root Directory: `./` (leave as default unless your project is in a subdirectory)

4. **Environment Variables** (if needed)
   - Add any environment variables your app requires
   - For this project, none are currently required

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production deployment, use: `vercel --prod`

## Automatic Deployments

Once connected to Git:
- Every push to your main branch triggers a production deployment
- Every push to other branches creates a preview deployment
- Pull requests get automatic preview URLs

## Custom Domain (Optional)

1. Go to your project settings in Vercel dashboard
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Configuration

Vercel automatically detects Next.js and uses:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Framework**: Next.js 16

No additional configuration needed!

## Troubleshooting

If you encounter build errors:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (Vercel uses Node.js 18.x by default)
4. Check for any environment variables that might be missing

## Project Structure

This project uses:
- Next.js 16.1.3 (App Router)
- React 19
- TypeScript
- CSS Modules

All configured and ready for Vercel deployment!
