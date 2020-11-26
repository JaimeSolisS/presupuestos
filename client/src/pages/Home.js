import React, {useState} from 'react'
import {StyledContainer, StyledH4, StyledInputFormControl, StyledGridContainer} from '../styled'
import ItemButton from '../components/nav/ItemButton'
 const Home = () => {
    const [search, setSearch] = useState("");
     return (
        <StyledContainer>
            <StyledH4>Todos los productos</StyledH4>
            <StyledInputFormControl 
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder= "Buscar"
            autoFocus/>
            <StyledGridContainer>
            <ItemButton name="Prueba" image="https://labrujitaotaku.com/tienda/image/cache/catalog/Megumin%20-%20Kono%20Subarashii%20Sekai%20ni%20Shukufuku%20wo!-2-s-500x500.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pm1.narvii.com/6407/e755e0bd842679897d942533c4333be8020bf7d9_00.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://lh3.googleusercontent.com/proxy/cxvYOswefue1ucLO2SJNTb8JY4wwbPfsYFS1EDlCm-q410HUsOFTN7wG4Mv774O_PeyVq1J-CfTLcGgotNRI"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://media.vandal.net/i/1200x630/8-2020/20208181357560_1.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://media.vandal.net/i/1200x630/8-2020/20208181357560_1.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>

            <ItemButton name="Prueba" image="https://labrujitaotaku.com/tienda/image/cache/catalog/Megumin%20-%20Kono%20Subarashii%20Sekai%20ni%20Shukufuku%20wo!-2-s-500x500.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pm1.narvii.com/6407/e755e0bd842679897d942533c4333be8020bf7d9_00.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://lh3.googleusercontent.com/proxy/cxvYOswefue1ucLO2SJNTb8JY4wwbPfsYFS1EDlCm-q410HUsOFTN7wG4Mv774O_PeyVq1J-CfTLcGgotNRI"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://media.vandal.net/i/1200x630/8-2020/20208181357560_1.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://media.vandal.net/i/1200x630/8-2020/20208181357560_1.jpg"></ItemButton>
            <ItemButton name="Prueba" image="https://pbs.twimg.com/profile_images/1190591694049366018/Orh4nwbQ_400x400.jpg"></ItemButton>
            </StyledGridContainer>
        </StyledContainer>
     )
 }

 export default Home;