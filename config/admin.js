module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd4ad509eec071ba00298eaac6559c9a6'),
  },
});
