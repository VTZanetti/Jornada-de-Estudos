const calendario = {
    datas: {
        data1: {
            dia: 14,
            mes: 9,
            ano: 2005,
        },
        data2: {
            dia: 10,
            mes: 4,
            ano: 2006,
        },
        data3: {
            dia: 20,
            mes: 5,
            ano: 2025,
        },

    },
        funcao: function() {
        return `${this.datas.data1.dia}/${this.datas.data1.mes}/${this.datas.data1.ano}`
    },
};

console.log(calendario.funcao());