# GPT ↔ MCP ↔ Figma Dev API (Vercel)

## 실행
```bash
npm install -g vercel
vercel login
vercel
```

## 환경변수 (Vercel Dashboard 설정)
- FIGMA_TOKEN
- FIGMA_FILE_KEY

## API
- GET https://your-app.vercel.app/api/figma → Figma 파일 구조
- POST https://your-app.vercel.app/api/figma → 노드 텍스트 수정 (예시)
