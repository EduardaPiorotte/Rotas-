import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

// ... (imports)
const API_BASE_URL = 'https://proweb.leoproti.com.br/api/v1/product';

export default function ProductDetail() {
    // 1. LÊ o 'id' bruto da URL
    const { id } = useParams();
    
    // 2. LIMPA o ID: Remove qualquer caractere que não seja dígito
    // Isso transforma "1:1" em "1" ou "205,x" em "205"
    const cleanId = id ? id.replace(/\D/g, '') : null;
    
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            if (!cleanId) {
                setLoading(false);
                setError("ID do produto inválido na URL.");
                return;
            }
            
            try {
                // 3. USA o ID LIMPO na requisição
                const response = await axios.get(`${API_BASE_URL}/${cleanId}`); 
                setProduct(response.data); 
                setLoading(false);
            } catch (err) {
                // 4. Exibe o erro usando o ID LIMPO
                setError(`Erro ao carregar o produto ${cleanId}: ${err.message}`);
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [cleanId]); // Agora a dependência é o ID limpo

    if (loading) {
        // Usa o ID LIMPO na mensagem de carregamento
        return <Container className="mt-5"><h2>Carregando detalhes do produto {cleanId || id}...</h2></Container>;
    }

    if (error) {
        return <Container className="mt-5"><h2 className="text-danger">{error}</h2></Container>;
    }
    
    if (!product) {
        return <Container className="mt-5"><h2>Produto não encontrado.</h2></Container>;
    }

    return (
        <Container className="mt-5">
            <Link to="/">
                <Button variant="secondary" className="mb-3">← Voltar para o Catálogo</Button>
            </Link>

            <Card>
                <Card.Header as="h2">{product.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>ID:</strong> {product.id}<br/>
                        <strong>Preço:</strong> R$ {product.price ? product.price.toFixed(2) : 'N/A'}<br/>
                        <strong>Descrição:</strong> {product.description || 'Nenhuma descrição fornecida.'}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}
