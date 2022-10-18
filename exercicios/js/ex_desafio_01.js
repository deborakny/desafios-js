/*
        Dadas as variáveis e seus valores
        a1=3, nome=Pedro
        a2=4, nome=Maria
        a3=2, nome=Juliana
        a4=2, nome=Fernando
        a5=1, nome=Rita
        a6=5, nome=Roque

        onde a1 até a6 representam a nota obtida por cada respectivo aluno após
        uma prova que teve como pontuação máxima 5 pontos

        Desafio: Escrever um programa que imprima os seguintes resultado:
        1. A média das notas dos alunos
        2. A taxa de acerto (porcentagem)
        3. O nome de um aluno aleatóriamente
        4. Os nomes dos alunos com nota menor que 3 com status "Reforço"
        5. Os nomes de alunos com nota maior que 4 com status "Estágio"
        */
        let a1=3,a2=4,a3=2,a4=2,a5=1,a6=5, nome, total, pontuacao, sorteio;
        total = a1+a2+a3+a4+a5+a6;
        pontuacao=5;
        function media(){
         return (total/6).toFixed(2);
        }
        console.log(`A média das notas dos alunos é: ${media()}`);

        function taxaAcerto(){
            return ((media()/pontuacao)*100).toFixed(2);
        }
        console.log(`A taxa de acerto é: ${taxaAcerto()}`);

        sorteio=parseInt(Math.random()*6)+1;
        console.log(sorteio);
        function sorteiaAluno(n){
            switch(n){
                case 1:
                nome="Pedro"
                break;
                case 2:
                nome="Maria"
                break;
                case 3:
                nome="Juliana"
                break;
                case 4:
                nome="Fernando"
                break;
                case 5:
                nome="Rita"
                break;
                case 6:
                nome="Roque"
                break;
            }
            return nome
        }
        console.log(`O aluno sorteado é:${sorteiaAluno(sorteio)}`)

        function statusAluno(nota,n){
            switch(n){
                case 1:
                nome="Pedro"
                break;
                case 2:
                nome="Maria"
                break;
                case 3:
                nome="Juliana"
                break;
                case 4:
                nome="Fernando"
                break;
                case 5:
                nome="Rita"
                break;
                case 6:
                nome="Roque"
                break;
            }
            if(nota < 3)
                console.log(`${nome} vai para Reforço`)
            if(nota > 4)
                console.log(`${nome} vai para Estágio`)
        }
        statusAluno(a6,1)