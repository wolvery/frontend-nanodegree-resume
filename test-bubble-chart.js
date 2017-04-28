$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    viewBoxSize: 700,
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
      {text: "Java", count: "630"},
      {text: ".Net", count: "913"},
      {text: "C", count: "548"},
      {text: "Javascript", count: "584"},
      {text: "Node.JS", count: "292"},
      {text: "AngularJs", count: "120"},
      {text: "SQL", count: "1095"},
      {text: "MongoDB", count: "460"},
      {text: "Shell Script", count: "248"},
      {text: "HTML5", count: "324"},
      {text: "CSS3", count: "365"},
      {text: "Matlab", count: "465"},
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
    {
      name: "central-click",
      options: {
        text: "(See more detail)",
        style: {
          "font-size": "34px",
          "font-style": "italic",
          "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function(item) {
            $('.ui.basic.modal')
            .remove();

            $("#header").append(divModal.replace("%title%",item.text).replace("%content%","The amount of days that I have developped in this technology is approximately of "+item.count));

            $('.ui.basic.modal')
            .modal('show');
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "text",
              classed: {count: true},
              style: {
                "font-size": "28px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #1
              textField: "count",
              classed: {text: true},
              style: {
                "font-size": "14px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "24px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
            ],
            centralFormat: [
            {// Line #0
              style: {"font-size": "40px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "20px"},
              attr: {dy: "40px"}
            }
            ]
          }
        }]
      });
});
