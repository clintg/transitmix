app.MarkerView = Backbone.View.extend({

  initialize: function(options) {
    options || (options = {});
    var markerOptions = [
      'color',
      'latlng',
      'draggable',
      'classNames',
      'bordered'
    ];
    _.extend(this, _.pick(options, markerOptions));
  },

  render: function() {
    var color = app.utils.tweakColor(this.color, -30);
    var html = '<div class="mapMarker"></div>';
    var icon = L.divIcon({ className: this.classNames, html: html });

    this.model = L.marker(this.latlng, {
      icon: icon,
      draggable: this.draggable,
    }).addTo(app.map);
  },
});
