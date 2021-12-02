<!-- <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={username}
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {error && <Form.Text className="text-message">{error}</Form.Text>}{" "}
        <br />
        <Button
          role="button"
          variant="primary"
          type="submit"
          value={loading ? "loading..." : "login"}
          disabled={loading}
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Form> -->