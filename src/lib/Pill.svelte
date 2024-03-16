<script lang="ts">
	export let text = 'Default Text';
	export let category = '';

	interface CategoryColorMap {
		[key: string]: string;
	}

	const categoryColorMap: CategoryColorMap = {
		web: 'bg-blue-500',
		backend: 'bg-green-500',
		programming: 'bg-red-500',
		database: 'bg-yellow-500',
		styling: 'bg-pink-500',
		tools: 'bg-gray-500',
		course: 'bg-indigo-500'
	};

	$: colorClass = categoryColorMap[category] || 'bg-gray-500';
</script>

<div class={`inline-block rounded-full px-4 py-1 text-white ${colorClass}`}>
	{text}
</div>
