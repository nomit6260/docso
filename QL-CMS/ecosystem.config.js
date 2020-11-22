module.exports = {
  apps: [
    {
      name: 'QuartileLabs Web CMS',
      cwd: '/home/ubuntu/QuartileLabs/QL-CMS',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        CLOUDINARY_NAME: 'quartilelabs',
CLOUDINARY_KEY: '343418427319266',
CLOUDINARY_SECRET: '1FrS46xiwARuTv7m9oe14dWs61U',
DATABASE_URI: 'mongodb+srv://QL-CMS:SfSI0hqrKYhqL8dG@quartilestrapi.4ct81.mongodb.net/quartilewebsite?retryWrites=true&w=majority'
      },
    },
  ],
};
