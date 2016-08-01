var backend = {
    apps_data: {
      "apps": [
        {
          "id": "owncloud",
          "name": "ownCloud",
          "icon": "penguin.png",
          "url": "http://owncloud.odroid-c2.syncloud.it"
        }
      ]
    },

    installed_apps: function(parameters) {
        var that = this;
        setTimeout(function() {
            success_callbacks(parameters, that.apps_data);
        }, 2000);
    }
}