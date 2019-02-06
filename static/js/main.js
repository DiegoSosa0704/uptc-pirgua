var config = {
    apiKey: "AIzaSyC3e1ROiSyZNBxMPp1YoWiHgBxEm4YfBL8",
    authDomain: "uptc-pirgua.firebaseapp.com",
    databaseURL: "https://uptc-pirgua.firebaseio.com",
    projectId: "uptc-pirgua",
    storageBucket: "uptc-pirgua.appspot.com",
    messagingSenderId: "299290845683"
};
firebase.initializeApp(config);
var station_1 = firebase.database().ref('station_1');
station_1.on('value', function (snapshot) {
    $('#station_1_data_1').html(snapshot.val().analog_in_1);
    $('#station_1_data_2').html(snapshot.val().analog_in_2);
    $('#station_1_data_3').html(snapshot.val().analog_in_3);
    $('#station_1_data_4').html(snapshot.val().analog_in_4);
});

var station_2 = firebase.database().ref('station_2');
station_2.on('value', function (snapshot) {
    $('#station_2_data_1').html(snapshot.val().analog_in_1);
    $('#station_2_data_2').html(snapshot.val().analog_in_2);
    $('#station_2_data_3').html(snapshot.val().analog_in_3);
    $('#station_2_data_4').html(snapshot.val().analog_in_4);
});

var station_3 = firebase.database().ref('station_3');
station_3.on('value', function (snapshot) {
    $('#station_3_data_1').html(snapshot.val().analog_in_1);
    $('#station_3_data_2').html(snapshot.val().analog_in_2);
    $('#station_3_data_3').html(snapshot.val().analog_in_3);
    $('#station_3_data_4').html(snapshot.val().analog_in_4);
});
