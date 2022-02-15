function createjsPanel() {
    var nc = jsPanel.create({
        headerTitle: "Новая карточка",
        theme: 'dark',
        panelSize: {
            width: 400,
            height: 400
        },
        content: '<form> <p><b>Наименование</b></p>            <p><input name="name" type="text" size="20"><Br>            <p><b>Дата создания</b></p>            <p><input name="date" type="date"><Br>            <p><b>Выберите цвет</b></p>            <p><input name="color" type="color"><Br>            <p><b>Описание</b></p>            <p><input name="disc" type="text" size="20"><Br>            <p><input onclick=send() type="submit"></p>        </form>',

    });
}
function send() {
    var name = $('#name').val();
    var date = $('#date').val();
    var color = $('#color').val();
    var disc = $('#disc').val();
    var pole_id = 0;
    var pos = 0;
    $.ajax({
        type: "POST",
        url: "new-card.php",
        data: {name:name, date:date, color:color, disc:disc, pole_id:pole_id, pos:pos}
    });
}