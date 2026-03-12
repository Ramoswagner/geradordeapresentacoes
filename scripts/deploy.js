const { exec } = require('child_process');

console.log('🚀 Deploying...');
exec('npm run build', (error) => {
    if (error) {
        console.error('❌ Build failed:', error);
        return;
    }
    console.log('✅ Build successful! Ready to deploy.');
});
