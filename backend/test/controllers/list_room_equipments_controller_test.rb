require "test_helper"

class ListRoomEquipmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @list_room_equipment = list_room_equipments(:one)
  end

  test "should get index" do
    get list_room_equipments_url, as: :json
    assert_response :success
  end

  test "should create list_room_equipment" do
    assert_difference("ListRoomEquipment.count") do
      post list_room_equipments_url, params: { list_room_equipment: { equipmentsroom_id: @list_room_equipment.equipmentsroom_id, room_id: @list_room_equipment.room_id } }, as: :json
    end

    assert_response :created
  end

  test "should show list_room_equipment" do
    get list_room_equipment_url(@list_room_equipment), as: :json
    assert_response :success
  end

  test "should update list_room_equipment" do
    patch list_room_equipment_url(@list_room_equipment), params: { list_room_equipment: { equipmentsroom_id: @list_room_equipment.equipmentsroom_id, room_id: @list_room_equipment.room_id } }, as: :json
    assert_response :success
  end

  test "should destroy list_room_equipment" do
    assert_difference("ListRoomEquipment.count", -1) do
      delete list_room_equipment_url(@list_room_equipment), as: :json
    end

    assert_response :no_content
  end
end
