function createjsPanel() {
    var nc = jsPanel.create({
        headerTitle: "Новая карточка",
        theme: 'dark',
        panelSize: {
            width: 400,
            height: 400
        },
        content: '<form> <p><b>Наименование</b></p>            <p><input type="text" size="20"><Br>            <p><b>Дата создания</b></p>            <p><input type="date"><Br>            <p><b>Выберите цвет</b></p>            <p><input type="color"><Br>            <p><b>Описание</b></p>            <p><input type="text" size="20"><Br>            <p><input type="submit"></p>        </form>',

    });
}