<script>
    export let seasons;
    export let teams;
    export let tableHeaders;
    export let tableData;
    export let totals;
</script>

<style>
    :root {
        --color-gray: #E0E0E0;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    thead {
        background-color: black;
        color: white;
    }

    tbody {
        text-align: right;
    }

    td, th {
        padding: 1vmin;
    }

    tfoot {
        text-align: right;
    }

    tfoot:hover {
        background-color: black;
        color: white;
    }

    .table-container {
        overflow-x: auto;
    }

    .table-column {
        background-color: var(--color-gray);
    }

    .table-row:hover {
        background-color: black;
        color: white;
    }

    .table-data {
        text-align: left;
    }
</style>

<div class="table-container">
    <table>
        <colgroup>
            <col class="table-column" span="0">
            <col class="table-column" span="1">
        </colgroup>
        <thead>
            <tr>
                {#each tableHeaders as tableHeader}
                    <th>{tableHeader}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each seasons as season, index}
                <tr class="table-row">
                    <td class="table-data">{season}</td>
                    <td class="table-data">{teams[index]}</td>
                    {#each tableData as data}
                        {#if data !== undefined && data[index] !== undefined}
                            <td>{data[index]}</td>
                        {:else}
                            <td>--</td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
        <tfoot>
            <tr>
                <td class="table-data">Career</td>
                <td class="table-data">--</td>
                {#each totals as total}
                    {#if total !== undefined}
                        <td>{total}</td>
                    {:else}
                        <td>--</td>
                    {/if}
                {/each}
            </tr>
        </tfoot>
    </table>
</div>