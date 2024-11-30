(function (window) {
    var byeSpeaker = {}; // Создаём объект

    var speakWord = "Goodbye";

    byeSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    };

    window.byeSpeaker = byeSpeaker; // Делаем доступным в глобальном контексте
})(window);
