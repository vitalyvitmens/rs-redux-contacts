import { RoutePaths } from 'src/routes/RoutePaths'
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const MainMenu = () => {
  return (
    <Navbar bg="bisque" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            to={RoutePaths.Home}
            style={{
              color: '#0000FF',
              fontWeight: '700',
              textShadow: '-2px 1px 1px #fff',
              textDecoration: 'none', // Убедитесь, что текст не подчеркнут
            }}
          >
            <h1>Книга контактов</h1>
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavItem>
            <Link
              to={RoutePaths.Groups}
              style={{
                color: '#FF0000',
                fontWeight: '700',
                textShadow: '1px 1px 1px black',
                textDecoration: 'none', // Убедитесь, что текст не подчеркнут
              }}
            >
              Группы
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to={RoutePaths.Favorit}
              style={{
                color: '#FF0000',
                fontWeight: '700',
                textShadow: '1px 1px 1px black',
                textDecoration: 'none', // Убедитесь, что текст не подчеркнут
              }}
            >
              Избранное
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}
