<script lang="ts">
	export let text = 'Default Text';
	export let category = '';

	interface CategoryColorMap {
		[key: string]: string;
	}

	const categoryColorMap: CategoryColorMap = {
		web: 'bg-blue-500',
		programming: 'bg-red-500',
		tools: 'bg-gray-500',
		AI: 'bg-purple-500',
		course: 'bg-indigo-500'
	};

	$: colorClass = categoryColorMap[category] || 'bg-gray-500';
</script>

<div class={`inline-block rounded-full px-4 py-1 text-white ${colorClass}`}>
	{text}
</div>
