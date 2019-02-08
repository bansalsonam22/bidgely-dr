angular.module('drControllers')
.controller('homeCtrl', ['$scope', '$state',
  function($scope, $state) {
    $scope.dateValue = '';
    var perpareChartData = function perpareChartData() {
      getChartConfigForInput();
      getChartConfigForOutputPrediction();
      getChartConfigForOutputError();
    };


    var getChartConfigForInput = function getChartConfigForInput() {
      $scope.chartConfig1 = {
        options: {
          chart: {
            type: 'area',
            zoomType: 'x',
            marginLeft: 90,
            marginRight: 90
          },
          xAxis: {
                type: 'datetime'
          },
          tooltip: {
              crosshairs: true,
              shared: true
          },
          plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
          }
        },
        yAxis: [
          {
             title: {
              text: 'Load'
             },
             gridLineWidth: 0,
             minorGridLineWidth: 0,
             lineWidth:0,
             startOnTick: false,
             labels: {enabled:true},
             opposite:true,
        },
        {
          min: 0,
          title: {
            text: 'Temprature'
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          labels :{enabled:true}
        }
      ],
        series:[{
                  type: 'line',
                  name: 'Load',
                  yAxis: 0,
                  data: $scope.getChartSeries("input", "Load"),
                  tooltip: {
                      valueDecimals: 2,
                      valueSuffix: ' mWh'
                  }
              },
              {
                  type: 'line',
                  name: 'Weather',
                  yAxis: 1,
                  data: $scope.getWeatherSeriesData(),
                  tooltip: {
                      valueDecimals: 2,
                      valueSuffix: ' °F'
                  }
              }
            ],
        title: {
          text: 'Input Graph'
        },
        credits: {
          enabled: false
        },
        loading: true,
        size: {height:400}
      };
      $scope.chartConfig1.loading = false;
    };

    var getChartConfigForOutputPrediction = function getChartConfigForOutputPrediction() {
      $scope.chartConfig2 = {
        options: {
          chart: {
            type: 'area',
            zoomType: 'x',
            marginLeft: 90,
            marginRight: 90
          },
          xAxis: {
                type: 'datetime'
          },
          tooltip: {
              crosshairs: true,
              shared: true
          },
          plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
          }
        },
        yAxis: [
          {
             title: {
              text: 'Load in mWh'
             },
             gridLineWidth: 0,
             minorGridLineWidth: 0,
             lineWidth:0,
             startOnTick: false,
             labels: {enabled:true},
             opposite: true
        }
      ],
        series:[{
                  type: 'line',
                  name: 'Actual Load',
                  yAxis: 0,
                  lineColor: '#1543ea',
                  lineWidth:5,
                  data: $scope.getChartSeries("output", "Actual_Load"),
                  tooltip: {
                      valueDecimals: 2,
                      valueSuffix: ' mWh'
                  }
              },
              {
                  type: 'line',
                  name: 'Predicted Load',
                  yAxis: 0,
                  lineColor: '#FF4571',
                  data: $scope.getChartSeries("output", "Predicted_Load"),
                  tooltip: {
                      valueDecimals: 2,
                      valueSuffix: ' mWh'
                  }
              },
              {
                  type: 'arearange',
                  name: 'Output Range',
                  linkedTo: ':previous',
                  yAxis: 0,
                  data: $scope.getAreaRangeChartSeries("output"),
                  marker: {enabled:false},
                  lineColor: '#303030',
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, "#FF4571"],
                          [1, Highcharts.Color("#FF4571").setOpacity(0).get('rgba')]
                      ]
                  },
                  tooltip: {
                      valueDecimals: 2,
                      valueSuffix: ' mWh'
                  }
              }
            ],
        title: {
          text: 'Output Prediction Graph'
        },
        credits: {
          enabled: false
        },
        loading: true,
        size: {height:400}
      };
      $scope.chartConfig2.loading = false;
    };

    var getChartConfigForOutputError = function getChartConfigForOutputPrediction() {
      $scope.chartConfig3 = {
        options: {
          chart: {
            type: 'area',
            zoomType: 'x',
            marginLeft: 90,
            marginRight: 90
          },
          xAxis: {
                type: 'datetime'
          },
          tooltip: {
              crosshairs: true,
              shared: true
          },
          plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
          }
        },
        yAxis: [
          {
             title: {
              text: ''
             },
             gridLineWidth: 0,
             minorGridLineWidth: 0,
             lineWidth:0,
             startOnTick: false,
             labels: {enabled:true},
             opposite:true,
        },
        {
          min: 0,
          title: {
            text: ''
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          labels :{enabled:true}
        }
      ],
        series:[{
                  type: 'line',
                  name: 'Actual Output Error',
                  yAxis: 0,
                  color: "#1543ea",
                  data: $scope.getChartSeries("output_error", "Actual_Error"),
                  tooltip: {
                      valueDecimals: 2,
                      valueSuffix: " %"
                  }
              },
              {
                  type: 'line',
                  name: 'Predicted Output Error',
                  yAxis: 0,
                  color: "#FF4571",
                  data: $scope.getChartSeries("output_error", "Predicted_Error"),
                  tooltip: {
                      valueDecimals: 2,
                      valueSuffix: " %"
                  }
              }
            ],
        title: {
          text: 'Output Error Graph'
        },
        credits: {
          enabled: false
        },
        loading: true,
        size: {height:400}
      };
      $scope.chartConfig3.loading = false;
    };

    $.getJSON(
        '../../assets/sample_data/sample.json',
        function (data) {
          $scope.loadData = data;
          perpareChartData();
          console.log(data);

        }
    );

    var getTimeStamp = function getTimeStamp(dateStr) {
      console.log(dateStr);
      var myDate = dateStr.split("-");
      return (new Date(dateStr).getTime());
    };

    $scope.getAreaRangeChartSeries = function getAreaRangeChartSeries(key1) {
      var inputData = $scope.loadData[key1];
      console.log($scope.loadData);
      var inputSeriesData = [];
      for(var i = 0; i < inputData["Predicted_confidence_lower"].length; i++) {
        inputSeriesData.push([getTimeStamp(inputData.Timestamp[i]), inputData["Predicted_confidence_lower"][i], inputData["Predicted_confidence_upper"][i]]);
      }
      console.log(inputSeriesData);
      return inputSeriesData;
    };

    $scope.getChartSeries = function getChartSeries(key1, key2) {
      var inputData = $scope.loadData[key1];
      console.log($scope.loadData);
      var inputSeriesData = [];
      for(var i = 0; i < inputData[key2].length; i++) {
        inputSeriesData.push([getTimeStamp(inputData.Timestamp[i]), inputData[key2][i]]);
      }
      console.log(inputSeriesData);
      return inputSeriesData;
    };

    $scope.getWeatherSeriesData = function getWeatherSeriesData() {
      var inputData = $scope.loadData.input;
      console.log($scope.loadData);
      var inputSeriesData = [];
      for(var i = 0; i < inputData.Load.length; i++) {
        inputSeriesData.push([getTimeStamp(inputData.Timestamp[i]), inputData.Temprature[i]]);
      }
      console.log(inputSeriesData);
      return inputSeriesData;
    };
    $scope.options = {
      autoclose: true,
      format: 'dd/mm/yyyy'
    }

    $(".date").datepicker().
    on("change", function(e) {
      console.log(e.target.value);
      $scope.dateValue = e.target.value;
    });
  }
]);
