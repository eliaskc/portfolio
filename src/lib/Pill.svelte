<script lang="ts">
	export let text = 'Default Text';
	export let category = '';

	interface CategoryColorMap {
		[key: string]: string;
	}

	const categoryColorMap: CategoryColorMap = {
		web: 'bg-[#9DAD6F]',
		programming: 'bg-[#5E5B52]',
		tools: 'bg-[#8DA9C4]',
		AI: 'bg-[#E16036]'
	};

	$: colorClass = categoryColorMap[category] || 'bg-gray-500';
</script>

<div class={`inline-block rounded-full px-4 py-1 text-white ${colorClass}`}>
	{text}
</div>
