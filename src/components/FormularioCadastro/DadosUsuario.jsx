import { Button, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);
    
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}
        >
            <TextField id="email"
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth />
            <TextField id="senha"
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                label="senha"
                name="senha"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;