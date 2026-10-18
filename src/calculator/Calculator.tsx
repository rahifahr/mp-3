import NumberInput from './NumberInput';
import OperationButton from './OperationButton';
import { operationSymbols, useCalculator } from './useCalculator';
import '../styles/calculator.css';

export default function Calculator() {
    const { first, setFirst, second, setSecond, output, isNegative, calculate, clear } = useCalculator();

    return (
        <section className="calculator">
            <h3>JavaScript Calculator</h3>
            <section className="calculator-inputs">
                <NumberInput id="number1" label="First number" placeholder="Enter first number" value={first} onChange={setFirst} />
                <NumberInput id="number2" label="Second number" placeholder="Enter second number" value={second} onChange={setSecond} />
            </section>
            <section className="calculator-buttons">
                {operationSymbols.map((symbol) => (
                    <OperationButton key={symbol} label={symbol} onClick={() => calculate(symbol)} />
                ))}
                <OperationButton label="Clear" onClick={clear} />
            </section>
            <h4 id="output" className={isNegative ? 'calculator-result negative' : 'calculator-result'}>
                {output}
            </h4>
        </section>
    );
}