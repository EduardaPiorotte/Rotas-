import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Importe componentes do Bootstrap que você precisar (ex: Container, Row, Card)
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; 

// Endereço base da API de Produtos
const API_BASE_URL = 'https://proweb.leoproti.com.br/api/v1/product'; 

export default function Home() {
    // 1. Estados para armazenar os dados e o status
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Função para buscar os dados da API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Requisição GET para listar todos os produtos
                const response = await axios.get(API_BASE_URL); 
                setProducts(response.data); // Armazena a lista de produtos
                setLoading(false); // Finaliza o carregamento
            } catch (err) {
                setError('Erro ao carregar os produtos: ' + err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // O array vazio garante que a função só roda uma vez (ao montar o componente)

    // 3. Renderização condicional
    if (loading) {
        return <Container className="mt-5"><h2>Carregando produtos...</h2></Container>;
    }

    if (error) {
        return <Container className="mt-5"><h2 className="text-danger">{error}</h2></Container>;
    }

    // 4. Renderização da lista de produtos
    return (
        <Container className="mt-5">
            <h1>🛍️ Catálogo de Produtos</h1>
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>Preço: R$ {product.price ? product.price.toFixed(2) : 'N/A'}</Card.Text>
                                {/* Link para a rota de detalhes, passando o ID */}
                                <Link to={`/product/${product.id}`}>
                                    <Button variant="primary">Ver Detalhes</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}