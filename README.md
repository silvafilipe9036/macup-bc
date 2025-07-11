# MacUp BC Bot
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "MacUp BC rodando com sucesso 🚀"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("src.main:app", host="0.0.0.0", port=8000, reload=True
# Macup Bc

Site de vendas de MacBooks usados com catálogo, pagamento e integração com WhatsApp.
