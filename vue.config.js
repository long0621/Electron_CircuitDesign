module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "pluginOptions": {
    "electronBuilder": {
      "builderOptions": {
        "extraResources": [
          "./extraResources/**"
        ]
      }
    }
  }
}