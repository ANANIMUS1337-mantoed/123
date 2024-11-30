(function (window) {
    var helloSpeaker = {}; // Создаём объект

    var speakWord = "Hello";

    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.helloSpeaker = helloSpeaker; // Делаем доступным в глобальном контексте
})(window);