document.getElementById('nfsForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const valorVenda = Number.parseFloat(document.getElementById('valorVenda').value);
    const itensVendidos = document.getElementById('itensVendidos').value.split(',');
    const irpf = Number.parseFloat(document.getElementById('irpf').value);
    const pis = Number.parseFloat(document.getElementById('pis').value);
    const cofins = Number.parseFloat(document.getElementById('cofins').value);
    const inss = Number.parseFloat(document.getElementById('inss').value);
    const issqn = Number.parseFloat(document.getElementById('issqn').value);

    const valorIrpf = (irpf / 100) * valorVenda;
    const valorPis = (pis / 100) * valorVenda;
    const valorCofins = (cofins / 100) * valorVenda;
    const valorInss = (inss / 100) * valorVenda;
    const valorIssqn = (issqn / 100) * valorVenda;

    const totalImpostos = valorIrpf + valorPis + valorInss + valorIssqn;
    const valorLiquido = valorVenda - totalImpostos;

    document.getElementById('result').innerHTML = `
    <div class="nota-fiscal">
        <h2 class="nota-fiscal-titulo">Nota fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itensVendidos.join(', ')}</p>
        <p><strong>Valor Bruto:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>IRPF (${irpf}%):</strong> R$ ${valorIrpf.toFixed(2)}</p>
        <p><strong>PIS (${pis}%):</strong> R$ ${valorPis.toFixed(2)}</p>
        <p><strong>COFINS (${cofins}%):</strong> R$ ${valorCofins.toFixed(2)}</p>
        <p><strong>INSS (${inss}%):</strong> R$ ${valorInss.toFixed(2)}</p>
        <p><strong>ISSQN (${issqn}%):</strong> R$ ${valorIssqn.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p class="nota-fiscal-liquido"><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    </div>
`;
});