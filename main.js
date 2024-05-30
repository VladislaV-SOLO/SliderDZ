const options = [
    {
        label: 'Витебск', value: 2, group: 'вторая'
    },
    {
        label: 'Могилёв', value: 6, group: 'первая'
    },
    {
        label: 'Гомель', value: 3, group: 'вторая'
    },
    {
        label: 'Брест', value: 1, group: 'третья'
    },
    {
        label: 'Гродно', value: 4, group: 'первая'
    },
    {
        label: 'Минск', value: 7
    },
    {
        label: 'Москва', value: 777
    }
]

class Select {
    constructor(selector, options, width) {
        this.$select = document.querySelector(selector);
        this.options = options;
        this.$select.style.setProperty('--selected-width', width);
        this.$label = document.querySelector('.select__label');
        this.$dropDown = document.querySelector('.select__drop-down')
        
        // this.itemsForDropDown = options.map(({label, value}) => {
        //     return `<li data-id=${value}>${label}</li>`
        // }).join('')

        this.itemsForDropDown = this.initGroup(this.options).map(([key, items]) => {
                if (key) {
                    
                    const groupList = items.map(({label, value}) => {
                        return `<li data-id=${value}>$${label}</li>`
                    }).join('')

                        return `<ul style="padding: 8px"> <span style="color: blue">${key}</span></ul>`

                }  else {
                    return items.map(({label, value}) => {
                        return `<li data-id=${value}>$${label}</li>`
                    }).join('')
                }
        }).join('')
    
    this.$select.addEventListener('click', (e) => {
        // console.log(e.target);
        // console.log(e.target.tagName);
        console.log(e.target.classList);

        if(e.target.classList.contains('select__label')) {

            // console.log('ты кликнул на LABEL');
            // if (this.$select.classList.contains('active')) {
            //     this.close()
            // } else {
            //     this.open()
            // }

            this.$select.classList.toggle('active')

        } else {
            if(e.target.tagName.toLowerCase() === 'li') {
                console.log('ты кликнул на LI');
                this.selectItem(+e.target.dataset.id)
                this.close()
            }
        }
    })
    
    
    
    }

    selectItem(id) {
        const selectedElement = this.options.find(item => item.value === id)
        this.$label.innerHTML = selectedElement.label
    }

    open() {
        this.$select.classList.add('active')
    }

    close() {
        this.$select.classList.remove('active')
    }

    initGroup(items) {
        const group = new Map()
    console.log('group', group);

    items.forEach((item) => {

       if (!group.has(item.group)) {
        group.set(item.group, [item])
       } else {
            group.set(item.group, [...group.get(item.group), item])
       }

    })
    return Array.from(group.entries())
}
}


const customSelect = new Select('.select', options,  '350px')


console.log(customSelect);


// [['первая', [{label:'Витебск'}, {label:'Могилёв'}], 
// 'вторая', [{label:'гродно'}, {label:'брест'}],
//  'третья', [{label:'гродно'}]]