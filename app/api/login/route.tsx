export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const mockUser = {
    email: "supreechamonsar363@gmail.com",
    password: "123456",
    name: "Supreecha",
  };
  if (email === mockUser.email && password === mockUser.password) {
    return Response.json({
      message: "Login สำเร็จ",
      success: true,
      user: mockUser.name,
    });
  } else {
    return Response.json({ message: "Login ล้มเหลว", success: false });
  }
}
