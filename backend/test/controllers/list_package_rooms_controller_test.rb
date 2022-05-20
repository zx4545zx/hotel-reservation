require "test_helper"

class ListPackageRoomsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @list_package_room = list_package_rooms(:one)
  end

  test "should get index" do
    get list_package_rooms_url, as: :json
    assert_response :success
  end

  test "should create list_package_room" do
    assert_difference("ListPackageRoom.count") do
      post list_package_rooms_url, params: { list_package_room: { packages_id: @list_package_room.packages_id, roomtypes_id: @list_package_room.roomtypes_id, value: @list_package_room.value } }, as: :json
    end

    assert_response :created
  end

  test "should show list_package_room" do
    get list_package_room_url(@list_package_room), as: :json
    assert_response :success
  end

  test "should update list_package_room" do
    patch list_package_room_url(@list_package_room), params: { list_package_room: { packages_id: @list_package_room.packages_id, roomtypes_id: @list_package_room.roomtypes_id, value: @list_package_room.value } }, as: :json
    assert_response :success
  end

  test "should destroy list_package_room" do
    assert_difference("ListPackageRoom.count", -1) do
      delete list_package_room_url(@list_package_room), as: :json
    end

    assert_response :no_content
  end
end
