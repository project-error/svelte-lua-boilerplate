Citizen.CreateThread(function()
    RegisterCommand('test', function()
        SendNUIMessage({
            action = 'setVisible',
            data = true
        })
        SetNuiFocus(true, true)
    end)

    RegisterNUICallback('hideUI', function()
        print('hidden')
        SetNuiFocus(false, false)
    end)
end)