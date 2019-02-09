months = [
    "Julio/2018",
    "Agosto/2018",
    "Septiembre/2018",
    "Octubre/2018",
    "Enero/2019"
];

$.ajax({
    url: "http://54.159.41.50/get_information_graph/ph/",
    type: "GET",
    error: function () {
        console.log("Error al obtener datos");
    },
    success: function (data) {
        data_station_1 = data["station_1"];
        data_station_2 = data["station_2"];
        data_station_3 = data["station_3"];
        var ctx = document.getElementById("chart_ph");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: months,
                datasets: [
                    {
                        data: data_station_1,
                        label: "Estación A",
                        borderColor: "#B03060",
                        fill: false
                    },
                    {
                        data: data_station_2,
                        label: "Estación B",
                        borderColor: "#FFD700",
                        fill: false
                    },
                    {
                        data: data_station_3,
                        label: "Estación C",
                        borderColor: "#0E6EB8",
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "PH"
                }
            }
        });
        addDataStation("table-ph", data_station_1, data_station_2, data_station_3);
    }
});

$.ajax({
    url: "http://54.159.41.50/get_information_graph/dissolved_oxygen/",
    type: "GET",
    error: function () {
        console.log("Error al obtener datos");
    },
    success: function (data) {
        data_station_1 = data["station_1"];
        data_station_2 = data["station_2"];
        data_station_3 = data["station_3"];
        var ctx = document.getElementById("chart_dissolved_oxygen");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: months,
                datasets: [
                    {
                        data: data_station_1,
                        label: "Estación A",
                        borderColor: "#B03060",
                        fill: false
                    },
                    {
                        data: data_station_2,
                        label: "Estación B",
                        borderColor: "#FFD700",
                        fill: false
                    },
                    {
                        data: data_station_3,
                        label: "Estación C",
                        borderColor: "#0E6EB8",
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Oxigeno Disuelto"
                }
            }
        });
        addDataStation(
            "table-dissolved_oxygen",
            data_station_1,
            data_station_2,
            data_station_3
        );
    }
});

$.ajax({
    url: "http://54.159.41.50/get_information_graph/electric_conductivity/",
    type: "GET",
    error: function () {
        console.log("Error al obtener datos");
    },
    success: function (data) {
        data_station_1 = data["station_1"];
        data_station_2 = data["station_2"];
        data_station_3 = data["station_3"];
        var ctx = document.getElementById("chart_electric_conductivity");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: months,
                datasets: [
                    {
                        data: data_station_1,
                        label: "Estación A",
                        borderColor: "#B03060",
                        fill: false
                    },
                    {
                        data: data_station_2,
                        label: "Estación B",
                        borderColor: "#FFD700",
                        fill: false
                    },
                    {
                        data: data_station_3,
                        label: "Estación C",
                        borderColor: "#0E6EB8",
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Conductividad Eléctrica"
                }
            }
        });
        addDataStation(
            "table-electric_conductivity",
            data_station_1,
            data_station_2,
            data_station_3
        );
    }
});

function addDataStation(id_table,
                        data_station_1,
                        data_station_2,
                        data_station_3) {
    for (i in months) {
        $("#" + id_table + " tbody").append(
            "<tr><td>" +
            months[i] +
            "</td><td>" +
            data_station_1[i] +
            "</td><td>" +
            data_station_2[i] +
            "</td><td>" +
            data_station_3[i] +
            "</td></tr>"
        );
    }
}
