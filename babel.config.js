// eslint-disable-next-line no-undef
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        "module-resolver",
        {
          root:["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias:{
            "@utils":"./src/utils",
            "@views":"./src/views",
            "@locales":"./src/locales",
            "@components":"./src/components",
            "@routes":"./src/routes",
            "@assets":"./src/assets",
            "@hooks":"./src/hooks",
          }
        }
      ],
    ]
  };
};
