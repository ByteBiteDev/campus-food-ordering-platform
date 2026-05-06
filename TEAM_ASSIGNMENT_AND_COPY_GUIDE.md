# Team Assignment and Copy Guide

## Scope of Empty Files
- Empty backend files: all files under `backend/src/modules/**` and `backend/src/middlewares/**`
- Empty frontend files: all files under `MyNewApp/app/(tabs)/**` and `MyNewApp/components/**`

## Member Assignments
Each member is assigned one main area.

1. **Haile**  
   Main area: Backend Authentication and Access  
   Files:
   - `backend/src/modules/auth/*`
   - `backend/src/middlewares/auth.middleware.ts`

2. **Chere**  
   Main area: Backend Vendor and Upload Management  
   Files:
   - `backend/src/modules/vendors/*`
   - `backend/src/modules/uploads/*`

3. **Eyuel**  
   Main area: Backend Meals and Orders  
   Files:
   - `backend/src/modules/meals/*`
   - `backend/src/modules/orders/*`

4. **Amanuel**  
   Main area: Backend Agents and Admin  
   Files:
   - `backend/src/modules/agents/*`
   - `backend/src/modules/admin/*`

5. **Sura**  
   Main area: Frontend Tabs  
   Files:
   - `MyNewApp/app/(tabs)/*`

6. **Michael**  
   Main area: Frontend Components  
   Files:
   - `MyNewApp/components/**/*`

## How Each Member Should Copy Code
1. Open both folders side by side:
   - original: `Mobile-App`
   - template: `CLASS_PROJECTS/Mobile-App-Team-Template`
2. Go to your assigned files in the original project.
3. Copy the full content from each original file.
4. Paste it into the matching empty file in the template project.
5. Save all edited files.
6. Do not edit files outside your assigned area.

## After Everyone Finishes
Run these commands from both app folders inside the template project:

### Backend
```bash
cd backend
npm i
npx prisma generate
npx prisma db push
npm run dev
```

### MyNewApp
```bash
cd MyNewApp
npm i
npm run start
```

## Final Check
- Confirm no assigned file remains empty.
- Confirm backend starts without errors.
- Confirm app starts and tabs/components render correctly.
