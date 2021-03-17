class Rect {
    constructor() {
        this.x = Math.max(100, Math.random() * document.documentElement.clientHeight - 300)
        this.y = Math.max(100, Math.random() * document.documentElement.clientWidth - 100)
        let element = document.createElement('div')
        this.element = element
        this.element.classList.add('rectang')
        this.element.style.position = 'absolute'
        element.setAttribute('draggable', 'false')
        this.element.style.left = this.x + 'px'
        this.element.style.top = this.y + 'px'
        this.element.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')'
        document.getElementsByClassName('container').item(0).appendChild(this.element)
        this.element.onclick = function (event) {
            console.log('click')
            if (element.getAttribute('draggable').valueOf() != 'true') {
                element.style.border = '4px dashed black'
                element.setAttribute('draggable', 'true')
            } else {
                console.log('disable')
                element.style.border = ''
                element.setAttribute('draggable', 'false')
            }
        };

        let startX = undefined
        let startY = undefined
        let draggin = false
        this.element.onmousedown = function (event) {
            if (element.getAttribute('draggable').valueOf() != 'true') return


            startX = event.clientX
            startY = event.clientY
            let shiftX = event.clientX - element.getBoundingClientRect().left - 22;
            let shiftY = event.clientY - element.getBoundingClientRect().top - 22;

            element.style.position = 'absolute';
            element.style.zIndex = 1000;
            document.body.append(element);

            moveAt(event.pageX, event.pageY);

            function moveAt(pageX, pageY) {
                element.style.left = pageX - shiftX + 'px';
                element.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                draggin = true
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.onmouseup = function (event) {
                document.removeEventListener('mousemove', onMouseMove);
                if (Math.sqrt((startX - event.clientX)*((startX - event.clientX)) + (startY - event.clientY)*(startY - event.clientY)) < 10) {
                    if (element.getAttribute('draggable').valueOf() != 'true') {
                        element.style.border = '2px dotted black'
                        element.setAttribute('draggable', 'true')
                    } else {
                        console.log('disable')
                        element.style.border = ''
                        element.setAttribute('draggable', 'false')
                    }
                    startX = undefined
                    startY = undefined
                }
            };
        };

        element.ondragstart = function () {
            return false;
        };
    }
}


document.addEventListener("DOMContentLoaded", function () {
    for (let index = 0; index < 6; index++) {
        new Rect()
    }
});
