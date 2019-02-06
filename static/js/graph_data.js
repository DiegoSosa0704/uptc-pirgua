$.ajax({
    url: 'http://54.159.41.50/get_information_graph/ph/',
    type: 'GET',
    error: function() {
        console.log("Error al obtener datos");
    },
    success: function(data) {
        data_station_1 = data["station_1"]
        data_station_2 = data["station_2"]
        data_station_3 = data["station_3"]
        var ctx = document.getElementById("chart_ph");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Julio","Agosto","Septiembre","Octubre","Enero"],
                datasets: [{ 
                    data: data_station_1,
                    label: "Estación A",
                    borderColor: "#3e95cd",
                    fill: false
                }, { 
                    data: data_station_2,
                    label: "Estación B",
                    borderColor: "#8e5ea2",
                    fill: false
                }, { 
                    data: data_station_3,
                    label: "Estación C",
                    borderColor: "#3cba9f",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                display: true,
                text: 'PH'
                }
            }
        });
    }
});

$.ajax({
    url: 'http://54.159.41.50/get_information_graph/dissolved_oxygen/',
    type: 'GET',
    error: function() {
        console.log("Error al obtener datos");
    },
    success: function(data) {
        data_station_1 = data["station_1"]
        data_station_2 = data["station_2"]
        data_station_3 = data["station_3"]
        var ctx = document.getElementById("chart_dissolved_oxygen");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Julio","Agosto","Septiembre","Octubre","Enero"],
                datasets: [{ 
                    data: data_station_1,
                    label: "Estación A",
                    borderColor: "#3e95cd",
                    fill: false
                }, { 
                    data: data_station_2,
                    label: "Estación B",
                    borderColor: "#8e5ea2",
                    fill: false
                }, { 
                    data: data_station_3,
                    label: "Estación C",
                    borderColor: "#3cba9f",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                display: true,
                text: 'Oxigeno Disuelto'
                }
            }
        });
    }
});

$.ajax({
    url: 'http://54.159.41.50/get_information_graph/electric_conductivity/',
    type: 'GET',
    error: function() {
        console.log("Error al obtener datos");
    },
    success: function(data) {
        data_station_1 = data["station_1"]
        data_station_2 = data["station_2"]
        data_station_3 = data["station_3"]
        var ctx = document.getElementById("chart_electric_conductivity");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Julio","Agosto","Septiembre","Octubre","Enero"],
                datasets: [{ 
                    data: data_station_1,
                    label: "Estación A",
                    borderColor: "#3e95cd",
                    fill: false
                }, { 
                    data: data_station_2,
                    label: "Estación B",
                    borderColor: "#8e5ea2",
                    fill: false
                }, { 
                    data: data_station_3,
                    label: "Estación C",
                    borderColor: "#3cba9f",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                display: true,
                text: 'Conductividad Electrica'
                }
            }
        });
    }
});