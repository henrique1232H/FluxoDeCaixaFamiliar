import "./style.css"
import { useState } from "react"
import { Show } from "../components/ShowSaldo"

export function Home() {

    
    const [expenses, setExpenses] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [allExpenses, setAllExpenses] = useState([]);
    const [resultCalculo, setResultCalculo] = useState();
    const [showBalance, setShowBalance] = useState([]);
    const [calcRecipe, setCalcRecipe] = useState([]);
    const [calcExpense, setCalcExpense] = useState([]);




    const addRecipes = () => {
        
        
        const numberRecipes = Number(recipes);

        setAllRecipes([...allRecipes, numberRecipes]);
        console.log(allRecipes);           

    }

    const addExpenses = () =>{
       
        const numberExpenses = Number(expenses);

        setAllExpenses([...allExpenses, numberExpenses]);
        console.log(allExpenses)
    }


    const calcBalance = () => {
       
        
        console.log(allRecipes, allExpenses)


        let calcRecipe = 0;

        let calcExpense = 0;
        
        for(let i = 0; i < allRecipes.length; i++) {
            calcRecipe += allRecipes[i];
            
        }


        for(let i = 0; i < allExpenses.length; i++) {
            calcExpense += allExpenses[i];
            
        }

        

        setResultCalculo(calcRecipe - calcExpense);

        setCalcRecipe(calcRecipe);
        setCalcExpense(calcExpense)

        console.log(resultCalculo, calcRecipe, calcExpense);

        setShowBalance([resultCalculo])
        
    }

    const checkCalc = () => {
        
        console.log(resultCalculo)


        if (calcRecipe < calcExpense) {
            const message = `Seu saldo é negativo R$ ${resultCalculo}`;

            return `Seu saldo é negativo R$${resultCalculo}`;
        } else {
            return `Seu saldo é positivo. R$${resultCalculo}`;
        }
    }

    

    return (

        <div className="container">
            <h1>Controlador de despesas</h1>


            <div className="form">

            <div className="receitas">
                <label htmlFor="inputReceita">
                    <h2>
                        Adicionar Receitas:
                    </h2>
                    </label>
                <input type="text" name="inputReceita" id="inputReceita"  placeholder="Adicione suas receitas" onChange={e => setRecipes(e.target.value)}/>
                <button onClick={addRecipes}>Adicionar Receita</button>
            </div>
            

            
            <div className="despesas">
                <label htmlFor="inputDespesas">
                    <h2>
                        Digite suas despesas:
                    </h2>
                </label>
                <input type="text" name="inputDespesas" id="inputDespesas" placeholder="Adicione suas Despesas" onChange={e => setExpenses(e.target.value)}/>
                <button onClick={addExpenses}>Adicionar Despesas</button>
            </div>

            <div className="spacing"></div>

            <div>
                <button type="submit" className="button" onClick={calcBalance}>Calcular despesas</button>
            </div>
            </div>


            {
                showBalance.map(e => <Show key={resultCalculo} result={checkCalc()} />)
            }
             

        </div>
    )
}