export class Projeto {
    constructor(public nome: string = '', 
        public status: 'Em andamento' | 'Pendente' | 'Concluído' | '' = '', 
        public prioridade: 'Alta' | 'Média' | 'Baixa' | '' = '') { }
}