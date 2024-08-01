
const Stats = ({speciesInfo: si, baseColor}) => 
{
	const calculateGender = (rate) => {
		if(rate === -1) return 'Genderless'
		return `${(1-rate/8)*100}% male, ${rate/8*100}% female.`
	}


	return (
		<div className='my-20 w-full overflow-hidden'>
			<div className='flex justify-center items-center mb-12'>
				<h1 className={`${baseColor} text-gray-100 px-2 py-1 rounded-md text-3xl`}>Dados de espécies</h1>
			</div>
			<div className="flex flex-wrap justify-center">
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Felicidade Básica </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>A felicidade ao ser pego por uma Pokébola normal; até 255.</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded`}>{si.base_happiness}</span>
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1 '>Taxa de captura </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>Quanto maior o número, mais fácil será a captura (até 255).</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded`}>{si.capture_rate}</span>
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3 '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Grupo de Ovos </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold'>Uma lista de grupos de ovos dos quais esta espécie é membro.</p>
					{si.egg_groups.map(e => <span key={e.name} className={`text-xl ${baseColor}-color py-1 capitalize mr-3 inline-block`}>{e.name}</span>)}
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Crescimento </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>A taxa na qual esta espécie de Pokémon ganha níveis em um jogo.</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded capitalize`}>{si.growth_rate.name}</span>
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Geração </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>A geração em que esta espécie de Pokémon foi introduzida.</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded`}>{si.generation.url.split('/')[6]}</span>
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Mítico </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>Se este é ou não um Pokémon mítico.</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded`}>{si.is_mythical ? "Yes" : 'No'}</span>
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Habitat </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>O habitat que esta espécie pode ser encontrada em um jogo.</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded capitalize`}>{si.habitat ? si.habitat.name : 'No Habitat'}</span>
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Forma </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>A forma deste Pokémon para pesquisa no Pokédex.</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded capitalize`}>{si.shape.name}</span>
				</div>
				<div className='p-4 w-full bg-white md:w-64 shadow-md rounded-md md:m-3 mt-3  '>
					<h1 className='lg:text-xl text-gray-600 mb-1'>Gênero </h1>
					<p className='text-sm text-gray-500 tracking-wide gn font-bold mb-2'>Distribuição de gênero deste Pokémon.</p>
					<span className={`text-xl text-white ${baseColor}-color py-1 rounded capitalize`}>{calculateGender(si.gender_rate)}</span>
				</div>
			</div>
			
		</div>
	)
}

export default Stats