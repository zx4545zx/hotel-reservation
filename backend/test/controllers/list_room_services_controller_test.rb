require "test_helper"

class ListRoomServicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @list_room_service = list_room_services(:one)
  end

  test "should get index" do
    get list_room_services_url, as: :json
    assert_response :success
  end

  test "should create list_room_service" do
    assert_difference("ListRoomService.count") do
      post list_room_services_url, params: { list_room_service: { room_id: @list_room_service.room_id, serviceroom_id: @list_room_service.serviceroom_id } }, as: :json
    end

    assert_response :created
  end

  test "should show list_room_service" do
    get list_room_service_url(@list_room_service), as: :json
    assert_response :success
  end

  test "should update list_room_service" do
    patch list_room_service_url(@list_room_service), params: { list_room_service: { room_id: @list_room_service.room_id, serviceroom_id: @list_room_service.serviceroom_id } }, as: :json
    assert_response :success
  end

  test "should destroy list_room_service" do
    assert_difference("ListRoomService.count", -1) do
      delete list_room_service_url(@list_room_service), as: :json
    end

    assert_response :no_content
  end
end
