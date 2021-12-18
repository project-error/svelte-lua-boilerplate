RegisterCommand('svelte:show', function()
    SendNUIMessage({
        action = 'setVisible',
        data = true
    })
    SetNuiFocus(true, true)
end)

RegisterNUICallback('getClientData', function(_, cb)
    local playerCoords = GetEntityCoords(PlayerPedId())
    cb({
        x = math.ceil(playerCoords.x),
        y = math.ceil(playerCoords.y),
        z = math.ceil(playerCoords.z)
    })
end)

RegisterNUICallback('hideUI', function(_, cb)
    cb({})
    SetNuiFocus(false, false)
end)