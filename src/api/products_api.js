class ProductsApi {
    constructor() {
        this.elements = [{
            "id":1,
            "title":"Aceite CASTROL ACTEVO 20W-50",
            "description":"Aceite mineral para motores de motos de 4 tiempos.",
            "product":"Aceite",
            "price":5200,
            "thumbnail":"https://www.bondio.com.ar/16092-large_default/cact20-aceite-castrol-actevo-4t-20w50-1lt-min.jpg",
            "code":"2A32F3212",
            "stock":10
        },
        {
            "id":2,
            "title":"Aceite CASTROL POWER 1 10W-40",
            "description":"Aceite sintético para motores de motos de 4 tiempos.",
            "product":"Aceite",
            "price":10710,
            "thumbnail":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtOR-FoOs-a0KCpQtYotpUDdQWow3Yh0ryuY1tfysdHtG62HD7dKy0GCHSUlQxuUhA6yNnYlE6HMR_mp2kb-UA2xz2AJ9l_pAD0p5Uhx2HBboPlgOjZASoKFiG&usqp=CAE",
            "code":"2A32F3214",
            "stock":10
        },
        {
            "id":3,
            "title":"Aceite MOTUL 5100 15W-50",
            "description":"Aceite semi-sintético para motores de motos de 4 tiempos.",
            "product":"Aceite",
            "price":8000,
            "thumbnail":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxsehu0IOPWLZz8qlXkRVU4ihgAO00xQC9bRPddzQudVYWdMuBgYLbvIdtEANPr3GPQB-Tfe1dJDPMY8LAxQ6ZB-I3NKvTiwfiKAAT4k0&usqp=CAE",
            "code":"2A32F3226",
            "stock":10
        },
        {
            "id":4,
            "title":"GIROS YAMAHA VARIOS MODELOS",
            "description":"Modelos sugeridos: FZ16, FZ25, YBR125, YBR250.",
            "product":"Accesorios",
            "price":6200,
            "thumbnail":"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ01BzMPA7y5TXRjin0wRmJbue6JphEwo4aoBFEaQqiaT2QjUKPHnpn90kgRdALfinVEMAZ4d4-DEqc5F_5-MsqO6GU_RUzJQgForeAQCI194joF2Pd-nuh&usqp=CAE",
            "code":"2A32F3228",
            "stock":10
        },
        {
            "id":5,
            "title":"BUJIA NGK CR8E",
            "description":"Modelos sugeridos: RX150, SKUA 150/250, TRIAX 150/250, ETC.",
            "product":"Repuestos",
            "price":3180,
            "thumbnail":"https://ridersonline.cl/panelAdmin/img/Productos/R6S5p9vkPW65.webp",
            "code":"2A32F3230",
            "stock":10
        },
        {
            "id":6,
            "title":"BATERÍA YUASA 12N7-3B",
            "description":"Modelos sugeridos: RX150, S2, TRIAX. (Consulte por su modelo de moto)",
            "product":"Repuestos",
            "price":43200,
            "thumbnail":"https://www.heavenimagenes.com/heavencommerce/68ac9d04-8767-4aca-9951-49f2fea1383b/images/v2/YUASA/1602181910407420_01_medium.jpg",
            "code":"2A32F3231",
            "stock":10
        }
    ]
        this.id = 6
    }

    show(id) {
        const elem = this.elements.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    showAll() {
        return [...this.elements]
    }

    save(elem) {
        const newElem = { ...elem, id: ++this.id }
        this.elements.push(newElem)
        return newElem
    }

    update(elem, id) {
        const newElem = { id: Number(id), ...elem }
        const index = this.elements.findIndex(p => p.id == id)
        if (index !== -1) {
            this.elements[index] = newElem
            return newElem
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    delete(id) {
        const index = this.elements.findIndex(elem => elem.id == id)
        if (index !== -1) {
            return this.elements.splice(index, 1)
        } else {
            return { error: `elemento no encontrado` }
        }
    }

    deleteAll() {
        this.elements = []
    }
}

module.exports = ProductsApi